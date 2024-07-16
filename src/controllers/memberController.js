import { Member } from "../models/member.js";

export const registerMember = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newMember = new Member(firstName, lastName, email, password);

  if (newMember.isValid()) {
    newMember.save();
    res.status(201).json(newMember);
  } else {
    res.status(400).json({ error: "Invalid member data" });
  }
};

export const getMember = (req, res) => {
  const memberId = req.params.id;
  const member = Member.findById(memberId);

  if (member) {
    res.status(200).json(member);
  } else {
    res.status(404).json({ error: "Member not found" });
  }
};

export const getAllMembers = (req, res) => {
  res.status(200).json(Member.findAll());
}
