const soap = require("soap");
const express = require("express");
const { secureHeapUsed } = require("crypto");
const ESLTele = express();

const service = {
  ESLPaymentService: {
    ESLPaymentPort: {
      paymentQuery: function (args, callback) {
        console.log("Payment Query invoked");
        const TransType = args.TransType;
        const TransID = args.TransID;
        const TransTime = args.TransTime;
        const BusinessShortCode = args.BusinessShortCode;
        const BillRefNumber = args.BillRefNumber;
        const MSISDN = args.MSISDN;
        // Return the response
        const result = {
          ResultCode: "0",
          ResultDesc: "Service processing successful",
          TransID: TransID,
          BillRefNumber: BillRefNumber,
          UtilityName: "Inland haulage",
          CustomerName: "TERMOS TEXTILE PRIVATE LIMITED COMPANY",
          Amount: "2500.00",
        };
        callback(null, result);
      },
      paymentValidation: function (args, callback) {
        console.log("Payment Validation invoked");
        const TransType = args.TransType;
        const TransID = args.TransID;
        const TransTime = args.TransTime;
        const BusinessShortCode = args.BusinessShortCode;
        const BillRefNumber = args.BillRefNumber;
        const MSISDN = args.MSISDN;
        // Return the response
        const result = {
          ResultCode: "0",
          ResultDesc: "Service processing successful",
          TransID: TransID,
          BillRefNumber: BillRefNumber,
          UtilityName: "Inland haulage",
          CustomerName: "TERMOS TEXTILE PRIVATE LIMITED COMPANY",
          Amount: "2500.00",
        };
        callback(null, result);
      },
      paymentConfirmation: function (args, callback) {
        console.log("Payment Confirmation invoked");
        const TransType = args.TransType;
        const TransID = args.TransID;
        const TransTime = args.TransTime;
        const BusinessShortCode = args.BusinessShortCode;
        const BillRefNumber = args.BillRefNumber;
        const MSISDN = args.MSISDN;
        // Return the response
        const result = {
          ResultCode: "0",
          ResultDesc: "Service processing successful",
          TransID: TransID,
          BillRefNumber: BillRefNumber,
          UtilityName: "Inland haulage",
          CustomerName: "TERMOS TEXTILE PRIVATE LIMITED COMPANY",
          Amount: "2500.00",
        };
        callback(null, result);
      },
    },
  },
};

const xml = require("fs").readFileSync("ESLPaymentServiceRender.wsdl", "utf8");
ESLTele.listen("8001", () => {
  const test = soap.listen(ESLTele, "/ESLPayment", service, xml, function () {
    console.log("server initialized");
  });
  // test.authorizeConnection = function (req) {
  //   console.log("this is authorizeConnection");
  //   return true;
  // };
  // test.authenticate = function (security) {
  //   var created, nonce, password, user, token;
  //   (token = security.UsernameToken),
  //     (user = token.Username),
  //     (password = token.Password.$value),
  //     // (nonce = token.Nonce.$value + "11"),
  //     (nonce = token.Nonce.$value),
  //     (created = token.Created);
  //   console.log(nonce);
  //   const return1 =
  //     user === "user" &&
  //     password === soap.passwordDigest(nonce, created, "password");
  //   return return1;
  // };
});
