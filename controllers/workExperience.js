const passport = require("passport");
const Workexperience = require("../models/workexperience");

// index aka list route
exports.index = function (req, res) {
  Workexperience.find().exec((err, list_Workexperience) => {
    list_Workexperience = reorderWorkExperience(list_Workexperience);
    res.json({
      list_Workexperience,
    });
  });
};

// handle create logic
exports.create = function (req, res) {
  let company_name = req.body.company_name;
  let postion_name = req.body.postion_name;
  let comment = [
    req.body.comment1,
    req.body.comment2,
    req.body.comment3,
    req.body.comment4,
    req.body.comment5,
  ];
  let date = req.body.date;
  let orderNumber = req.body.orderNumber;
  let tempWorkexperience = new Workexperience({
    company_name: company_name,
    postion_name: postion_name,
    date: date,
    comment: comment,
    orderNumber: orderNumber
  });

  tempWorkexperience.save((err, workexperience) => {
    if (err) {
      console.log(err);
      res.json({ msg: "Could not save Workexperience" });
    } else {
      res.json({ workexperience });
    }
  });
};

//  handle delete logic
exports.delete = function (req, res) {
  console.log("1");
  let workexperienceId = req.params.id;
  if (!workexperienceId) {
    return res.json({ msg: "Could not be found" });
    console.log("1");
  } else {
    Workexperience.findOneAndRemove({ _id: workexperienceId }, (err, workexperience) => {
      if (err) {
        console.log(err);
        res.json({ msg: "Could not delete Workexperience" });
      } else {
        res.json({ workexperience });
      }
    });
  }
};

// handle update logic
exports.update = function (req, res) {
  let workexperienceId = req.params.id;
  if (!workexperienceId) {
    return res.json({ msg: "Workexperience Could not be updated" });
  } else {
    let company_name = req.body.company_name;
    let postion_name = req.body.postion_name;
    let comment = [
      req.body.comment1,
      req.body.comment2,
      req.body.comment3,
      req.body.comment4,
      req.body.comment5,
    ];

    let date = req.body.date;
    let orderNumber = req.body.orderNumber;
    let tempWorkexperience = {
      company_name: company_name,
      postion_name: postion_name,
      date: date,
      comment: comment,
      orderNumber: orderNumber
    };

    Workexperience.findByIdAndUpdate(
      workexperienceId,
      tempWorkexperience,
      (err, workexperience) => {
        if (err) {
          console.log(err);
          res.json({ msg: "Workexperience Could not be updated" });
        } else {
          res.json({ workexperience });
        }
      }
    );
  }
};

function reorderWorkExperience(workexperience) {
  if (workexperience.length > 1) {
    workexperience = workexperience.sort(function (a, b) {
      if (a._doc.orderNumber > b._doc.orderNumber) {
        return -1;
      }
      if (a._doc.orderNumber < b._doc.orderNumber) {
        return 1;
      }
      return 0;
    });
  }
  return workexperience;
}
