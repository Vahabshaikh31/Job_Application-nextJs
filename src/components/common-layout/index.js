import { currentUser } from "@clerk/nextjs/server";
import Header from "../header";
import { fetchProfileAction } from "@/actions";

export async function CommonLayout({ children }) {
  const user = await currentUser();

  const profileInfo = await fetchProfileAction(user?.id);

  return (
    <div className=" mx-auto max-w-7xl p-6 lg:px-8">
      {/* Header Component */}
      <Header profileInfo={profileInfo} user={user} />
      {/* Header Component */}
      {/* Main Content */}
      <main>{children}</main>
      {/* Main Content */}
    </div>
  );
}
