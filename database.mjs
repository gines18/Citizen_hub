//insert data to postgres

function insertFormData(formData) {
  const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "Samochody",
    password: "",
    port: 5432,
  });
  client.connect();

  const insertQuery = `
        INSERT INTO cars (brand, model, year)
        VALUES ($1, $2, $3)
        RETURNING *;`;

  formData.forEach((car) => {
    const values = [car.brand, car.model, car.year];

    client.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("Error inserting data:", err);
        return;
      }
      console.log("Inserted", res.rowCount, "row(s) into the table");
    });
  });

  client.query("SELECT * FROM cars", (err, res) => {
    if (err) {
      console.error("Error retrieving data:", err);
      client.end();
      return;
    }
    console.log("Retrieved data:", res.rows);
    client.end();
  });
  console.log("Inserting data:", formData);
}
export default insertFormData;
