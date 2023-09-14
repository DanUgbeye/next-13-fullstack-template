import { BaseException } from "@/server/exceptions";
// import userRepository from "@/server/modules/user/user.repository";
import { User } from "@/server/modules/user/user.types";
import ServerResponse from "@/server/utils/response";

export async function GET(req: Request) {
  try {
    // const user = new userRepository({
    //   fullname: "Daniel Ugbeye",
    //   email: "ugbeyellionz@gmail.com",
    //   sex: "male",
    //   dob: new Date(),
    //   address: "London, UK",
    // } as Partial<User>);

    // await user.save();
    return ServerResponse.success("Login route", 200);
  } catch (err: any) {
    return ServerResponse.error(new BaseException(err.message));
  }
}
