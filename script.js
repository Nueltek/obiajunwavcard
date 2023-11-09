
  document.getElementById("saveContact").addEventListener("click", function() {
    // Define the vCard content
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:ENGR UCHENNA OBIAJUNWA
ORG:STARCODE INTEGRATED PROJECT LIMITED
TEL;TYPE=WORK:+2348146883185
TEL:+2347044575577
TEL;TYPE=CELL:+2348034239993
EMAIL:starcode.com@gmail.com
ADR:;;213 Abak Road, Okwuson Tools plaza;Uyo;Akwa Ibom state;Nigeria
URL:https://wa.me/+2348034239993
END:VCARD
    `;

    // Encode the vCard data as a data URL
    const dataUrl = "data:text/vcard;charset=utf-8," + encodeURIComponent(vCardData);

    // Open the data URL in a new window or tab
    window.open(dataUrl);
  });

