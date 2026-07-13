"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField, } from "@heroui/react";
import { useRouter } from "next/navigation";
import { showToast } from "nextjs-toast-notify";
import { LuArrowLeft } from "react-icons/lu";
import { MdUpdate } from "react-icons/md";
const UpdateProfile = () => {
  const router = useRouter();
    const { data: session } = authClient.useSession()
    const user = session?.user;
   const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, image } = Object.fromEntries(new FormData(e.target));
     const newName = name || user?.name;
    const newImage = image || user?.image;
     if(newName == user?.name && newImage == user?.image){
       showToast.error("No changes made!", {
      duration: 3000,
      position: "top-center",
      transition: "bounceInDown",
    });   
    return;
    }
    await authClient.updateUser({
      name: newName,
      image: newImage,
    });
    if(name || image) {
     showToast.success(`Profile Updated Successful!`, {
    duration: 4000,
    progress: true,
    position: "top-center",
    transition: "bounceIn",
    icon: '',
    sound: true,
  });
    }
   
  };

  return (
    <div>
      <Modal>
        <Button
          variant="secondary"
          className="bg-primary text-[#0f0e17] font-semibold rounded-xl hover:bg-yellow-400 px-6"
        >
          {" "}
          <MdUpdate /> Update profile
        </Button>
        <Modal.Backdrop className={""} variant="blur">
          <Modal.Container placement="auto" className="">
            <Modal.Dialog className="sm:max-w-md bg-[#30302E]">
              <Modal.CloseTrigger />
              <Modal.Header className="">
                <Modal.Heading className="text-center text-2xl text-white">
                  Update Profile
                  <p className="mt-1 text-sm leading-5 text-white/70 text-center">
                    Change your name and profile photo
                  </p>
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form 
                    className="flex flex-col gap-4  bg-[#30302E]"
                    onSubmit={handleSubmit}
                  >
                    <TextField
                      className="w-full"
                      name="name"
                      type="text"
                      variant="secondary"
                    >
                      <Label className="text-white/70">Full Name</Label>
                      <Input
                        className={
                          "text-white bg-black/50 border border-white/50 focus:border-none"
                        }
                        placeholder="Rename your name"
                      />
                    </TextField>
                    <TextField
                      className="w-full"
                      name="image"
                      variant="secondary"
                    >
                      <Label className="text-white/70">Photo URL</Label>
                      <Input
                        className="text-white truncate bg-black/50 border border-white/50 focus:border-none"
                        placeholder="Enter your new Photo URL"
                      />
                    </TextField>
                    <Button

                      type="submit"
                      className={
                        "w-full mt-8 rounded-xl text-white hover:bg-black"
                      }
                      slot="close"
                      variant="outline"
                    >
                      Update
                    </Button>
                  </form>
                </Surface>
                <Button
                  onClick={() => router.push("/my-profile")}
                  className={"w-full mt-5 rounded-xl bg-primary text-black "}
                  slot="close"
                  variant="outline"
                >
                  <LuArrowLeft /> Back to Profile
                </Button>
              </Modal.Body>
              {/* <Modal.Footer>
              <Button className={"w-full"} slot="close" variant="secondary">
                Update
              </Button>
              <Button slot="close">Send Message</Button>
            </Modal.Footer> */}
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default UpdateProfile;
