import { API_URL } from "./data";

async function request(path, options) {
  const res = await fetch(`${API_URL}${path}`, options);
  const body = await res.json().catch(() => ({}));
  if (!res.ok) {
    const first = Object.values(body).flat()[0];
    throw new Error(typeof first === "string" ? first : "Something went wrong. Please try again.");
  }
  return body;
}

export const getWorks = () => request("/works/");
export const getFaqs = () => request("/faqs/");

const post = (path, data) =>
  request(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

export const sendInquiry = (data) => post("/inquiries/", data);
export const subscribe = (email) => post("/subscribe/", { email });
