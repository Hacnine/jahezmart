import { PrismaClient } from '@prisma/client';
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // Read the backend-local products.json by default
  const filePath = path.resolve(__dirname, '../../frontend/public/products.json');
  if (!fs.existsSync(filePath)) {
    console.error('products.json not found at', filePath);
    process.exit(1);
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const products = JSON.parse(raw);

  for (const p of products) {
    const data: any = {
      jsonId: String(p.id ?? ''),
      name: p.name ?? '',
      brand: p.brand ?? null,
      stock: p.stock != null ? Number(p.stock) : null,
      quantity: p.quantity != null ? Number(p.quantity) : null,
      price: p.price != null ? Number(p.price) : 0,
      discount: p.discount != null ? Number(p.discount) : null,
      rating: p.rating != null ? Number(p.rating) : null,
      reviews: p.reviews != null ? Number(p.reviews) : null,
      recommended: !!p.recommended,
      colors: Array.isArray(p.colors) ? p.colors.map(String) : [],
      images: p.images ?? {},
      description: p.description ?? [],
      category: p.category ?? null,
      featured: !!p.featured,
      // use Prisma model field names
      newProduct: !!p.new_product || !!p.newProduct,
      fullDetails: p.full_details ?? p.fullDetails ?? [],
    };

    await prisma.product.upsert({
      where: { jsonId: data.jsonId },
      update: data,
      create: data,
    });
    console.log(`Upserted product ${data.jsonId} - ${data.name}`);
  }

  // Seed dummy users
  const users = [
    {
      name: 'Admin User',
      email: 'admin@jahezmart.com',
      password: 'admin123',
      role: 'admin',
    },
    {
      name: 'Abdullah',
      email: 'abdullah@example.com',
      password: '1',
      role: 'user',
      firstName: 'Abdullah',
      lastName: 'Khan',
      birthday: new Date('1990-01-01'),
      gender: 'male',
      phoneNumber: '1738844893',
      shippingAddress: 'Khulana, Shatgumbuj Mosque',
      billingAddress: 'Khulana, Shatgumbuj Mosque',
    },
    {
      name: 'Imadullah',
      email: 'imadullah@example.com',
      password: '1',
      role: 'user',
      firstName: 'Imadullah',
      lastName: 'Ahmed',
      birthday: new Date('1985-05-15'),
      gender: 'male',
      phoneNumber: '1234567890',
      shippingAddress: 'Dhaka, Bangladesh',
      billingAddress: 'Dhaka, Bangladesh',
    },
  ];

  for (const u of users) {
    const hashedPassword = await bcrypt.hash(u.password, 10);
    const user = await prisma.user.upsert({
      where: { email: u.email },
      update: {
        name: u.name,
        password: hashedPassword,
        role: u.role,
        firstName: u.firstName,
        lastName: u.lastName,
        birthday: u.birthday,
        gender: u.gender,
        phoneNumber: u.phoneNumber,
        shippingAddress: u.shippingAddress,
        billingAddress: u.billingAddress,
      },
      create: {
        name: u.name,
        email: u.email,
        password: hashedPassword,
        role: u.role,
        firstName: u.firstName,
        lastName: u.lastName,
        birthday: u.birthday,
        gender: u.gender,
        phoneNumber: u.phoneNumber,
        shippingAddress: u.shippingAddress,
        billingAddress: u.billingAddress,
      },
    });

    // Create dummy orders for users
    if (u.role === 'user') {
      const order1 = await prisma.order.create({
        data: {
          userId: user.id,
          orderNumber: `ORD-${user.id.slice(-6).toUpperCase()}-001`,
          total: 120,
          status: 'delivered',
          items: {
            create: [
              {
                productId: '1',
                name: '3 Seater Sofa',
                price: 120,
                quantity: 1,
                image: '/images/products/product1.1.jpg',
              },
            ],
          },
        },
      });

      const order2 = await prisma.order.create({
        data: {
          userId: user.id,
          orderNumber: `ORD-${user.id.slice(-6).toUpperCase()}-002`,
          total: 200,
          status: 'cancelled',
          items: {
            create: [
              {
                productId: '2',
                name: 'Single Bed',
                price: 200,
                quantity: 1,
                image: '/images/products/product2.1.jpg',
              },
            ],
          },
        },
      });

      console.log(`Created orders for user ${u.email}`);
    }

    console.log(`Upserted user ${u.email} - ${u.name}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
