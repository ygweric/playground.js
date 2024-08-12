
import fs from "fs";

let base64String =fs.readFileSync(
    "./res/sample/base64-img.txt",
    "utf-8"
  );; // Not a real image
  // Remove header
  let base64Image = base64String.split(";base64,").pop();
  fs.writeFileSync("./out/sample/base64.png", base64Image, {
    encoding: "base64",
  });