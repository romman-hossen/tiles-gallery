import {  Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TilesCard = ({ tile }) => {
  console.log(tile, "this is tiles ");
  return (
    <div className="animate__animated animate__zoomIn
             transition-all duration-300
             hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
      <Card className="p-0 gap-2 bg-black/50 animate__animated animate__zoomIn flex-1">
        {/* <img
          alt="Indie Hackers community"
          className="pointer-events-none aspect-square w-14 rounded-2xl object-cover select-none"
          loading="lazy"
          src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/demo1.jpg"
        /> */}
        <div className="relative w-full h-56 aspect-square ">
          <Image
            src={tile?.image}
            className="object-cover rounded-t-2xl"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={tile?.title}
          />
          <Chip className="absolute right-2 top-2 bg-primary">
          {
              tile?.inStock ? <span className="">In Stock</span> : <span className="text-rose-500">Out of Stock</span>
            }
          </Chip>    
        </div>
        <div className="p-4 rounded-b-2xl ">
          <Card.Header className="">
            <Card.Title className="text-white min-h-12 text-xl md:text-2xl">
              {tile?.title}
            </Card.Title>
            <Card.Description className="text-white/70">
              <span>{tile?.material} :</span>
              <span> {tile?.dimensions}</span>
            </Card.Description>
            <Card.Content className="text-white/70 mt-2">
              <div className="flex gap-3 items-center">
                <span>Price : </span>
                <span className="text-primary text-xl md:text-2xl">
                  ${tile?.price}
                </span>
              </div>
            </Card.Content>
          </Card.Header>
          <Card.Footer className="mt-3">
            <Link href={`/all-tiles/${tile?.id}`}>
            <Button variant="outline" className={"rounded-xl text-white hover:bg-bg"}>View Details</Button>
            </Link>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
};

export default TilesCard;
