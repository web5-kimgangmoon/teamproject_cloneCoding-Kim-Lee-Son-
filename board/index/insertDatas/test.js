(async () => {
  await axios.post(
    "http://localhost:3000/u/login",
    {
      channel: "main",
      strid: "qwerasd",
      pw: "1q2w3e4r",
    },
    {
      withCredentials: true,
    }
  );
})();
