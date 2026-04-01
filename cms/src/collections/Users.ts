import { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "username",
      type: "text",
      // If user really wants username login, I'd need custom strat or just display field.
      // I'll add it as a field for now.
    },
    // Email is added automatically by auth: true
  ],
};
