export const CONFIG = {
  TRANSACTION_FILE_PATH:
    "/Users/jeren/j-projects/J_FINANCE_CLIENT/public/data/transactions/transactions.dt",
  TRANSACTION_BUFFER_LEANGTH: 1000,
  J_FINANCE_FILE_OFFSET_TABLE_RESERVED_BYTES: 30,
  USER: "cretoprof@gmail.com",
  APP_PASSWORD: "bondutvwjwvhruvu",
  GIT_CREDS: {
    access_token: "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",
    base_url: "https://api.github.com",
    owner: "rahoc369782",
    repo: "J_FINANCE_CONNECTOR",
    j_finance_input_file: "J-INPUT-FILE",
    j_finance_output_file: "J-OUTPUT-FILE",
    j_finance_input_file_path_generator: function () {
      return `repos/${this.owner}/${this.repo}/contents/${this.j_finance_input_file}`;
    },
    j_finance_output_file_path_generator: function () {
      return `repos/${this.owner}/${this.repo}/contents/${this.j_finance_output_file}`;
    },
  },
};
