import ProfileCard from "@/components/ProfileCard";

const MyProfilePage = () => {
    return (
        <div className="bg-[#30302E] min-h-[40vh] py-10">
            <div className="max-w-7xl mx-auto ">
                 <h3 className="text-xl md:text-3xl pb-2 animate__animated animate__fadeInUp">My <span className="text-primary border-b-2 border-primary">Profile</span></h3>
               <p className="text-gray-400">Manage your TilesGallery account </p>
               <ProfileCard />

            </div>
        </div>
    );
};

export default MyProfilePage;