export const createNote=(req, res)=>{
    console.log("Create note function");
    res.status(201).json({
      success: true,
      message: "Note created",
    });
}

