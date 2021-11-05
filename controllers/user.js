const viewRegister = (req, res) => {
    return res.render('register')
}

const viewLogin = (req, res) => {
    return res.render('login')
}

const viewDashboard = async (req, res) => {
    const dorms = await  Dorms.findAll()
    
    return res.render("dashboard", {
      dorms
    });
};
  
const viewDorms = (req, res) => {
    return res.render("dorms");
};

module.exports = {
    viewRegister,
    viewLogin,
    viewDashboard,
    viewDorms,
}