function debit_transaction(arr) {
  return arr.map((account) => {
    return `    ${account["account_label"]}      ${account["amount"]}`;
  });
}

function credit_transaction(arr) {
  return arr.map((account) => {
    return `    ${account["account_label"]}      -${account["amount"]}`;
  });
}

function parsed_to_require_ledger_schema(trns) {
  const generated_buf = `${trns["date"]} ${
    trns["description"]
  }\n${debit_transaction(trns["accounts"]["debit"])}\n${credit_transaction(
    trns["accounts"]["credit"]
  )}`;
  return generated_buf;
}

export function process_trns(buffer, last_processed_timestamp) {
  const parsed_data = JSON.parse(buffer);
  let trns_sec = "";
  // let last_processed_timestamp = "";
  parsed_data.forEach((trns) => {
    if (trns["timestamp"] > last_processed_timestamp) {
      const parsed_trns = parsed_to_require_ledger_schema(trns);
      trns_sec += parsed_trns + "\n";
      last_processed_timestamp = trns["timestamp"];
    }
  });

  return { success: true, data: trns_sec, last_processed_timestamp };
}
