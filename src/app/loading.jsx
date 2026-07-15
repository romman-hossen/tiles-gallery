import { Spinner } from "@heroui/react";

const MainLoading = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
              <Spinner size="lg" className="text-primary"  />
        </div>
    );
};

export default MainLoading;