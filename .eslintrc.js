module.exports = {
  rules: {
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for create-react-app projects)
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  }
};
