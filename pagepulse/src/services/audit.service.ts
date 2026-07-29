export const auditService = async (url: string) => {
  return {
    url,
    message: "Audit service working",
  };

  // throw new Error("Testing Global Error Handler");
};
