import OwnerRegistraionPage from "@/routes/ownerRegistrationPage"
import ProtectedRoute from "@/components/auth/ProtectedRoute";

const OwnerRegistration = () => {
    return (
        <div>
            <ProtectedRoute >
            <OwnerRegistraionPage />
            </ProtectedRoute>
        </div>
    )
}
export default OwnerRegistration 