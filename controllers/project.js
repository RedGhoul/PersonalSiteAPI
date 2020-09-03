const passport = require("passport");
const Project = require("../models/project");
const async = require("async");
// index aka list route
exports.index = function (req, res) {
  Project.find().exec((err, list_projects) => {
    return res.json({ list_projects });
  });
};

// handle create logic
exports.create = function (req, res, next) {
  let name = req.body.name;
  let tag_line = req.body.tag_line;
  let url_github = req.body.url_github;
  let url_live = req.body.url_live;

  let tempProject = new Project({
    name: name,
    tag_line: tag_line,
    url_github: url_github,
    url_live: url_live,
  });

  tempProject.save((err, project) => {
    if (err) {
      return res.json({ msg: "Could not be found" });
    } else {
      return res.json({ project });
    }
  });
};

//  handle delete logic
exports.delete = function (req, res) {
  let projectId = req.params.id;
  if (!projectId) {
    return res.json({ msg: "No project ID could be found" });
  } else {
    Project.findByIdAndRemove(projectId, (err, project) => {
      if (err) {
        return res.json({ msg: "Action could not be taken" });
      } else {
        return res.json({ project });
      }
    });
  }
};

// handle update logic
exports.update = function (req, res) {
  // display update form
  let projectId = req.params.id;
  if (!projectId) {
    return res.json({ msg: "No project ID could be found" });
  } else {
    let name = req.body.name;
    let tag_line = req.body.tag_line;
    let date = req.body.date;
    let url_github = req.body.url_github;
    let url_live = req.body.url_live;

    let tempProject = {
      name: name,
      date: date,
      tag_line: tag_line,
      url_github: url_github,
      url_live: url_live,
    };

    Project.findByIdAndUpdate(projectId, tempProject, (err, project) => {
      if (err) {
        return res.json({ msg: "could not update project" });
      } else {
        return res.json({ project });
      }
    });
  }
};

// handles toggle show logic
exports.toggleShow = function (req, res) {
  let projectId = req.params.id;
  if (!projectId) {
    return res.json({ msg: "No project ID could be found" });
  } else {
    Project.findById(projectId, (err, project) => {
      if (err) {
        return next(err);
      } else {
        project.can_show = !project.can_show;
        project.save((err, project) => {
          if (err) {
            return next(err);
          } else {
            return res.json({ project });
          }
        });
      }
    });
  }
};
