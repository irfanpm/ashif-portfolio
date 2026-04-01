import path from "path";
import { getPayload } from "payload";
import config from "../src/payload.config";

const run = async (): Promise<void> => {
  const payload = await getPayload({ config });

  // Check if user exists
  const users = await payload.find({
    collection: "users",
    where: {
      email: {
        equals: "ashif@admin.com",
      },
    },
  });

  if (users.totalDocs === 0) {
    try {
      await payload.create({
        collection: "users",
        data: {
          email: "ashif@admin.com",
          password: "ashif123",
        },
      });
      console.log("✅ Admin user created: ashif@admin.com / ashif123");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  } else {
    console.log("Admin user already exists.");
  }

  process.exit(0);
};

run();
