const sql = require("mssql");
const { isNumberic } = require("../utils/tools");
require("dotenv").config();

const config = {
  server: "localhost",
  database: "smallBussinessDB",
  user: "sa",
  password: "123",
  trustedConnection: "Yes",
  driver: "SQL Server Native Client 11.0",
  encrypt: true,
  trustServerCertificate: true,
};

const AsyncQuery = async (query, params, callSp = 1) => {
  // const poolConnection = await sql.connect(config);
  //processing SQL commands
  if (params && params.length > 0) {
    //having params
    //raw SQL command
    if (!callSp) {
      query += " where ";
    }

    for (let i = 0; i < params.length; i++) {
      let p = "";

      if (callSp) {
        //Store procedure
        if (isNumberic(params[i][1]) || typeof params[i][1] == "number") {
          p = ` ${params[i][1]},`;
        } else p = ` N'${params[i][1]}',`;

        query += p;
        continue;
      }

      //raw SQL commands
      query += `(${params[i][0]} = @${params[i][0]} or @${params[i][0]} is null or @${params[i][0]} = '')`;
      if (i < params.length - 1) query += " and ";
    }

    //remove last ','
    query = query.slice(0, -1);
    console.log(query);
  }

  let result;
  try {
    // result = await poolConnection.request().query(query);
    const connected = await sql.connect(config);
    result = await connected.request().query(query);
    // connected.close();
    //success calling from SQL and get result from it
    return {
      success: true,
      data: result.recordset ? result.recordset : [],
    };
  } catch (e) {
    // connected.close();
    //SQL or connection error will return
    return {
      success: false,
      //print error of trigger
      data: e.precedingErrors[0]
        ? e.precedingErrors[0].originalError.info.message
        : e.message,
    };
  }
};

module.exports = { AsyncQuery };
