"use server";

export async function Abc() {
  const res = await fetch("https://api.example.com/data");
  return res.json();
}