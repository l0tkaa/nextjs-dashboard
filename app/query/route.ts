import postgres from 'postgres';
// import { listInvoices } from '@/app/lib/data'; // or wherever your listInvoices() is defined

// export async function GET() {
//   const invoices = await listInvoices(); // fetch from the DB

//   return new Response(JSON.stringify(invoices), {
//     headers: { 'Content-Type': 'application/json' },
//     status: 200,
//   });
// }

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listInvoices() {
	const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

	return data;
}

