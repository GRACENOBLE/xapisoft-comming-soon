"use server";

export async function SubmitAction(values: { username: string }) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values);
};
