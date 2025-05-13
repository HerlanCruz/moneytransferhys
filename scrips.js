const conversionData = [
    { ars: 50000, bob: 610 },
    { ars: 100000, bob: 1220 },
    { ars: 150000, bob: 1830 },
    { ars: 200000, bob: 2440 },
    { ars: 300000, bob: 3660 },
    { ars: 500000, bob: 6100 },
    { ars: 1000000, bob: 12200 },
  ];
  
  const container = document.getElementById("data-rows");
  
  conversionData.forEach(item => {
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
      <div>${item.ars.toLocaleString()}</div>
      <div>${item.bob.toLocaleString()}</div>
    `;
    container.appendChild(row);
  });
  