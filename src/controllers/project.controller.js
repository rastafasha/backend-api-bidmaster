import Project from '../models/project.model.js';

export const getProjects = async (req, res) =>{
    try {
        const projects = await Project.find()
        //traemos las tareas en orden de ultima fecha
        projects.sort((a,b) => b.createdAt - a.createdAt);
        
        res.json(projects);
    } catch (error) {
        return res.status(500).json({message: 'Error al obtener proyectos'});
    }
};
export const getProjectsByUser = async (req, res) =>{
    try {
        const projects = await Project.find({
        user: req.params.id
        }).populate('user')
        res.json(projects);
    } catch (error) {
        return res.status(404).json({ message: 'No projects found' });
    }
};
export const createProject = async (req, res) =>{
    try {
        const {name, type, deliveryDate, hasPresentation, url} = req.body;
        const newProject = new Project({
            name, 
            type, 
            deliveryDate,
            hasPresentation,
            url: req.body.url || '',
            user: req.user.id
        });
        const saveProject =  await newProject.save();
        res.json(saveProject);
    } catch (error) {
        return res.status(400).json({message: error.message});
    }

};
export const getProject = async (req, res) =>{
  try {
     const project = await Project.findById(req.params.id)
        
   if(!project) return res.status(404).json({msg: 'project not found'})
    res.json(project);

  } catch (error) {
    return res.status(404).json({msg: 'project not found'})
  }
};
export const deleteProject = async (req, res) =>{
    try {
        const project = await Project.findByIdAndDelete(req.params.id)
        if(!project) return res.status(404).json({msg: 'project not found'})
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({msg: 'project not found'})
    }
};
export const updateProject = async (req, res) =>{
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if(!project) return res.status(404).json({msg: 'Project not found'})
        res.json(project);
    } catch (error) {
        return res.status(404).json({msg: 'project not found'})
    }
};