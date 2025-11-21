import AdminLayout from '../../components/admin/AdminLayout';
import AdminGuard from '../../components/admin/AdminGuard';

export default function Layout({ children }) {
  return (
    <AdminGuard>
      <AdminLayout>{children}</AdminLayout>
    </AdminGuard>
  );
}