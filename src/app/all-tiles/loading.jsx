import { Spinner } from "@heroui/react";

const Loading = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
              <Spinner size="xl" className="text-yellow-400"  />
        </div>
    );
};

export default Loading;