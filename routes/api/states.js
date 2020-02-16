const express = require('express');
//const uuid = require('uuid');
const router = express.Router();
//const members = require('../../Members1');
const states = require('../../states');

// Gets All Members
router.get('/', (req, res) => res.json(states));

// Get Single Member
router.get('/:code', (req, res) => {
  const found = states.some(state => state.code === parseInt(req.params.code));

  if (found) {
    res.json(states.filter(state => state.code === parseInt(req.params.code)));
  } else {
    res.status(400).json({ msg: `No state with the code of ${req.params.code}` });
  }
});


/*
// Create Member
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
  }

  members.push(newMember);
  res.json(members);
  // res.redirect('/');
});

// Update Member
router.put('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    const updMember = req.body;
    members.forEach(member => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;
        member.email = updMember.email ? updMember.email : member.email;

        res.json({ msg: 'Member updated', member });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// Delete Member
router.delete('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json({
      msg: 'Member deleted',
      members: members.filter(member => member.id !== parseInt(req.params.id))
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});*/

module.exports = router;
