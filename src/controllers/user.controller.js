import User from '../models/user.model.js';

export const getUsers = async (req, res) =>{
    try {
        const users = await User.find()
        //traemos las tareas en orden de ultima fecha
        users.sort((a,b) => b.createdAt - a.createdAt);
        res.json(users);
    } catch (error) {
        return res.status(500).json({message: 'Error al obtener users'})
    }
};

export const getUser = async (req, res) =>{
  try {
     const user = await User.findById(req.params.id)
   if(!user) return res.status(404).json({msg: 'user not found'})
    res.json(user);

  } catch (error) {
    return res.status(404).json({msg: 'user not found'})
  }
};
export const deleteUser = async (req, res) =>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user) return res.status(404).json({msg: 'user not found'})
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({msg: 'user not found'})
    }
};
export const updateUser = async (req, res) =>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!user) return res.status(404).json({msg: 'user not found'})
        res.json(user);
    } catch (error) {
        return res.status(404).json({msg: 'user not found'})
    }
};

export const change_password = (req, res) => {
    var email = req.params['email'];
    var params = req.body;
    Usuario.findOne({ email: email }, (err, user) => {
        if (err) {
            res.status(500).send({ message: "Error en el servidor" });
        } else {
            if (user == null) {
                res.status(500).send({ message: "El correo electrónico no se encuentra registrado, intente nuevamente." });
            } else {
                bcrypt.hash(params.password, null, null, function(err, hash) {
                    Usuario.findByIdAndUpdate({ _id: user._id }, { password: hash }, (err, user_update) => {
                        res.status(200).send({ data: user_update });
                    });
                });

            }
        }
    });
}
