const { Op } = require("sequelize");
const SecretarioModel = require("../models/secretario.model");
const CursoModel = require("../../curso/models/curso.model"); 

class CursoController {
  static async criarCurso(req, res) { 
    try {
      const { cod_curso, nome, descricao } = req.body;
      if (!cod_curso || !nome || !descricao) {
        return res
          .status(400)
          .json({ msg: "Todos os campos devem ser preenchidos!" });
      }
      const curso = await CursoModel.create({
        cod_curso,
        nome,
        descricao, 
      });
      res.status(201).json(curso);
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Erro interno do servidor. Por favor, tente mais tarde" });
    }
  }

  static async listarCursos(req, res) {
    try {
      const cursos = await CursoModel.findAll();
      if (cursos.length === 0) {
        return res.status(200).json({ msg: "Não há cursos a serem exibidos!" });
      }
      res.status(200).json(cursos); 
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Erro interno do servidor. Por favor, tente mais tarde" });
    }
  }

  static async listarCursoPorCodCurso(req, res) { 
    try {
      const cod_curso = req.params.cod_curso;
      const curso = await CursoModel.findByPk(cod_curso); 
      if (!curso) { 
        return res.status(404).json({ msg: "Curso não encontrado!" });
      }
      res.status(200).json(curso);
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Erro interno do servidor. Por favor, tente mais tarde" });
    }
  }

  static async editarCurso(req, res) { 
    try {
      const cod_curso = req.params.cod_curso;
      const { nome, descricao } = req.body; 
      if (!cod_curso || !nome || !descricao) {
        return res.status(400).json({
          msg: "Os campos cod_curso, nome e descrição devem ser preenchidos!",
        });
      }
      const cursoAtualizado = await CursoModel.update(
        { nome, descricao }, 
        { where: { cod_curso } }
      );
      if (cursoAtualizado[0] === 0) { 
        return res.status(404).json({ msg: "Curso não encontrado!" });
      }
      res.status(200).json({ msg: "Curso atualizado com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Erro interno do servidor. Por favor, tente mais tarde" });
    }
  }

  static async deletarCurso(req, res) {
    try {
      const cod_curso = req.params.cod_curso;
      const curso = await CursoModel.findByPk(cod_curso); 
      if (!curso) {
        return res.status(404).json({ msg: "Curso não encontrado!" }); 
      }
      await CursoModel.destroy({
        where: {
          cod_curso,
        },
      });
      res.status(200).json({ msg: "Curso excluído com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ msg: "Erro interno do servidor. Por favor, tente mais tarde" });
    }
  }
}

module.exports = CursoController;
