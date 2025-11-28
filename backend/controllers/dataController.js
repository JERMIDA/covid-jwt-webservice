import axios from "axios";
import fs from "fs";

export const getCovidData = async (req, res) => {
  try {
    const response = await axios.get(process.env.EXTERNAL_API);
    const summary = {
      cases: response.data.cases,
      todayCases: response.data.todayCases,
      deaths: response.data.deaths,
      todayDeaths: response.data.todayDeaths,
      recovered: response.data.recovered,
      active: response.data.active
    };
    // Log success
    fs.appendFileSync("logs/app.log", `[SUCCESS] Data fetched at ${new Date()}\n`);
    res.json(summary);
  } catch (err) {
    fs.appendFileSync("logs/app.log", `[ERROR] ${err.message} at ${new Date()}\n`);
    res.status(500).json({ error: "External API request failed" });
  }
};
