document.getElementById("getNameBtn").addEventListener("click", async () => {
  const domain = document.getElementById("domainInput").value;

  if (!domain) {
    document.getElementById("result").innerText =
      "Empty field please provide domain";
    return;
  }

  try {
    const response = await fetch(
      ``,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    document.getElementById("result").innerText =
      data.cname || "Error fetching CNAME.";
  } catch (error) {
    document.getElementById("result").innerText = "Error fetching CNAME.";
  }
});

document.getElementById("loginBtn").addEventListener("click", () => {
  window.open("https://google.com", "_blank");
});
