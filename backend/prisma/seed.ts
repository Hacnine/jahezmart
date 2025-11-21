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
    await prisma.user.upsert({
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
