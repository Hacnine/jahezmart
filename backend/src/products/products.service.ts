import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto, UpdateProductDto, ListProductsQueryDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    // Upsert by jsonId to avoid duplicates
    const product = await this.prisma.product.upsert({
      where: { jsonId: createProductDto.jsonId },
      update: createProductDto as any,
      create: createProductDto as any,
    });

    return product;
  }

  async findAll(query: ListProductsQueryDto) {
    const { page = 1, limit = 20, category, brand, search, color, minPrice, maxPrice, sort } = query;
    
    const skip = (page - 1) * limit;
    const where: any = {};

    // Category filter
    if (category) {
      const cats = category.split(',').map(s => s.trim()).filter(Boolean);
      if (cats.length === 1) {
        where.category = cats[0];
      } else if (cats.length > 1) {
        where.category = { in: cats };
      }
    }

    // Brand filter
    if (brand) {
      const brands = brand.split(',').map(s => s.trim()).filter(Boolean);
      if (brands.length === 1) {
        where.brand = brands[0];
      } else if (brands.length > 1) {
        where.brand = { in: brands };
      }
    }

    // Search filter
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { brand: { contains: search, mode: 'insensitive' } },
      ];
    }

    // Color filter
    if (color) {
      where.colors = { has: color };
    }

    // Price range filter
    if (minPrice !== undefined || maxPrice !== undefined) {
      where.price = {};
      if (minPrice !== undefined) where.price.gte = minPrice;
      if (maxPrice !== undefined) where.price.lte = maxPrice;
    }

    // Sorting
    let orderBy: any = { createdAt: 'desc' };
    if (sort) {
      switch (sort) {
        case 'price-asc':
          orderBy = { price: 'asc' };
          break;
        case 'price-desc':
          orderBy = { price: 'desc' };
          break;
        case 'rating-desc':
          orderBy = { rating: 'desc' };
          break;
        case 'name-asc':
          orderBy = { name: 'asc' };
          break;
        case 'name-desc':
          orderBy = { name: 'desc' };
          break;
        case 'latest':
        default:
          orderBy = { createdAt: 'desc' };
      }
    }

    const [items, total] = await Promise.all([
      this.prisma.product.findMany({
        where,
        skip,
        take: limit,
        orderBy,
      }),
      this.prisma.product.count({ where }),
    ]);

    return {
      items,
      total,
      page,
      limit,
    };
  }

  async findOne(id: string) {
    // Try finding by jsonId first, then by id
    let product = await this.prisma.product.findUnique({
      where: { jsonId: id },
    });

    if (!product) {
      product = await this.prisma.product.findUnique({
        where: { id },
      });
    }

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    // Find product first
    const product = await this.findOne(id);

    // Update using the actual id
    const updated = await this.prisma.product.update({
      where: { id: product.id },
      data: updateProductDto as any,
    });

    return updated;
  }

  async remove(id: string) {
    // Find product first
    const product = await this.findOne(id);

    // Delete using the actual id
    await this.prisma.product.delete({
      where: { id: product.id },
    });

    return { message: 'Product deleted successfully', id: product.id };
  }
}
