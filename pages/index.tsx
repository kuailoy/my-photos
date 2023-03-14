import Swiper from "@/components/Swiper";
import useUser from "@/lib/useUser";

export default function Home() {
  const { user } = useUser({
    redirectTo: "/login",
  });
  if (!user?.isLoggedIn) return <div>Loading...</div>;
  // const { events } = useEvents(user)
  return <Swiper />;
}