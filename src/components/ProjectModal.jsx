import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Chip,
  Stack,
  Box,
} from "@mui/material";

const ProjectModal = ({ project, onClose, open }) => {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        "& .MuiDialogContent-root, & .MuiDialogTitle-root, & .MuiDialogActions-root":
          {
            fontFamily: "'Times New Roman', Times, serif",
          },
      }}
    >
      <DialogTitle>{project.project_name}</DialogTitle>

      <DialogContent
        dividers
        sx={{
          fontFamily: "'Times New Roman', Times, serif",
        }}
      >
        {/* 封面 */}
        <Box sx={{ mb: 2 }}>
          <img
            src={project.images.cover}
            alt="cover"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Box>

        {/* 類型 */}
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{
            fontFamily: "'Times New Roman', Times, serif",
          }}
        >
          類型：{project.type}
        </Typography>

        {/* 標籤 */}
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mb: 2 }}>
          {project.tags.map((tag, idx) => (
            <Chip key={idx} label={tag} variant="outlined" />
          ))}
        </Stack>

        {/* 技術 */}
        <Typography
          variant="body1"
          sx={{ mb: 2, fontFamily: "'Times New Roman', Times, serif" }}
        >
          <strong >使用技術：</strong> {project.technologies.join(", ")}
        </Typography>

        {/* 描述段落 */}
        {project.description.map(([title, textOrEmpty, imagesOrNothing], i) => (
          <Box key={i} sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontFamily: "'Times New Roman', Times, serif",
              }}
            >
              {title}
            </Typography>
            {Array.isArray(imagesOrNothing) ? (
              <Stack spacing={2}>
                {imagesOrNothing.map((img, j) => (
                  <img
                    key={j}
                    src={img}
                    alt={`img-${j}`}
                    style={{ width: "100%", borderRadius: "6px" }}
                  />
                ))}
              </Stack>
            ) : (
              <Typography
                variant="body2"
                // sx={{
                //   fontFamily: "'Times New Roman', Times, serif",
                // }}
              >
                {textOrEmpty}
              </Typography>
            )}
          </Box>
        ))}

        {/* 相關連結 */}
        <Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontFamily: "'Times New Roman', Times, serif",
            }}
          >
            相關連結
          </Typography>
          <Stack spacing={1}>
            {project.links.map(([label, url], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#1976d2", textDecoration: "none" }}
              >
                {label}
              </a>
            ))}
          </Stack>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="primary">
          關閉
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProjectModal;
