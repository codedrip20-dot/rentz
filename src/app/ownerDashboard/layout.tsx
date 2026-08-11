import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function OwnerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute allowedRoles={["owner"]}>
      {children}
    </ProtectedRoute>
  );
}