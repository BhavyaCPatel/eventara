import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.actions";
import Search from "@/components/shared/Search";
import { SearchParamProps } from "@/types";
import CategoryFilter from "@/components/shared/CategoryFilter";
export default async function Home({ searchParams } : SearchParamProps) {

  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
    status: 'approved'
  })

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5  md:py-10">
        <div className="wrapper grid gird-cols-1 gap-5  md:grid-cols-2 2xl:gap-0">
          <div className="flex pl-2 flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect & Celebrate: Your Events, Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
            Book and learn helpful tips from 4,608+ mentors in world-class companies with our global community.
            </p>
            <Button className=" button w-full sm:w-fit" asChild size={"lg"}>
              <Link href={"#events"}>
                Explore Events
              </Link>
            </Button>
          </div>

          <Image 
            src={"/assets/images/hero.png"}
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold pl-2">
          Trusted By <br/> Thousands Of Events.
        </h2>
        <div className="flex w-full flex-col pl-2 gap-5 md:flex-row">
          <Search/>
          <CategoryFilter/>
        </div>
        <div className="pl-2">
          <Collection
            data={events?.data}
            emptyTitle="No Events Found"
            emptyStateSubtext="Come Back Later"
            collectionType="All_Events"
            limit={6}
            page={page}
            totalPages={events?.totalPages}
          />
        </div>
      </section>
    </>
  );
}
