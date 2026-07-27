import DashboardHeader from "@/components/ownerDashboard/DashboardHeader";
import WelcomeCard from "@/components/ownerDashboard/WelcomeCard";
import QuickStats from "@/components/ownerDashboard/QuickStats";
import QuickActions from "@/components/ownerDashboard/QuickActions";
import SubscriptionCard from "@/components/ownerDashboard/SubscriptionCard";
import RecentActivity from "@/components/ownerDashboard/RecentActivity";

const OwnerDashboardPage = () => {
    return (
        <main className="min-h-screen bg-slate-50">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-8">
                <DashboardHeader />

                <WelcomeCard />

                <QuickStats />

                <QuickActions />

                <SubscriptionCard />

                <RecentActivity />
            </div>
        </main>
    );
};

export default OwnerDashboardPage;