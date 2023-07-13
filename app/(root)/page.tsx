import { UserButton } from "@clerk/nextjs";

const SetUpPage = () => {
  return (
    <div className="p-4">
      this is a protected page
      <UserButton />
    </div>
  );
};
export default SetUpPage;
