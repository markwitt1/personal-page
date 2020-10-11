import React, { useState } from "react";
import {
  IconButton,
  Grid,
  FormControl,
  InputLabel,
  Select,
  Input,
  Chip,
  MenuItem,
  Theme,
  useTheme,
  SvgIcon,
  makeStyles,
} from "@material-ui/core";
import ProjectCard from "../components/ProjectCard";
import GitHubIcon from "@material-ui/icons/GitHub";
import ClearIcon from "@material-ui/icons/Clear";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import Layout from "../layouts/PageLayout";
import SEO from "../components/SEO";

const technologies = [
  "Flutter",
  "PowerPoint",
  "Electron",
  "JavaScript",
  "TypeScript",
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  controls: {
    display: "flex",
    alignItems: "flex-end",
  },
  toolIcon: {
    marginBottom: theme.spacing(1),
  },
}));

function getStyles(tech: string, enabled: string[], theme: Theme) {
  return {
    fontWeight:
      enabled.indexOf(tech) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ProjectsPage = () => {
  const theme = useTheme();
  const classes = useStyles();
  const [techSel, setTechSel] = useState<string[]>(technologies);

  const projects = [
    {
      img: "/5pk.png",
      title: "5. Prüfungskomponente",
      text:
        "(German language) Wie viel Verantwortung dürfen wir künstlicher Intelligenz überlassen?",
      buttons: [
        <IconButton
          key="download"
          aria-label="download"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1SlAIPoN7wJsKWYBNphWyPpi0aF5V9EgE/view?usp=sharing"
            );
          }}
        >
          <SvgIcon fontSize="small">
            <path
              d="M7.71 3.5L1.15 15l3.43 6l6.55-11.5M9.73 15L6.3 21h13.12l3.43-6m-.57-1L15.42 2H8.57l6.86 12h6.85z"
              fill="#626262"
            />
          </SvgIcon>
        </IconButton>,
      ],
      technologies: ["PowerPoint"],
      link:
        "https://drive.google.com/file/d/1SlAIPoN7wJsKWYBNphWyPpi0aF5V9EgE/view?usp=sharing",
    },
    {
      img: "pushup-reminder.png",
      title: "PushupReminder",
      text:
        "This is an Electron desktop app under active development. It forces you to do pushups after a certain time spent at your desk.",
      buttons: [
        <IconButton
          key="github"
          aria-label="github"
          onClick={() => {
            window.open("https://github.com/teknoalex/pushup-reminder");
          }}
        >
          <GitHubIcon fontSize="small" />
        </IconButton>,
      ],
      technologies: ["Electron", "JavaScript"],
      link: "https://github.com/teknoalex/pushup-reminder",
    },
  ];

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTechSel(event.target.value as string[]);
  };
  return (
    <Layout>
      <SEO title="Projects" />
      <div className={classes.controls}>
        <FormControl className={classes.formControl}>
          <InputLabel id="chip-label">Technologies:</InputLabel>
          <Select
            labelId="chip-label"
            id="chip"
            multiple
            value={techSel}
            onChange={handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {(selected as string[]).map((value) => (
                  <Chip
                    size="small"
                    key={value}
                    label={value}
                    className={classes.chip}
                  />
                ))}
              </div>
            )}
            //MenuProps={MenuProps}
          >
            {technologies.map((tech) => (
              <MenuItem
                key={tech}
                value={tech}
                style={getStyles(tech, techSel, theme)}
              >
                {tech}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <IconButton
          className={classes.toolIcon}
          onClick={() => {
            //clear techSel
            setTechSel([]);
          }}
        >
          <ClearIcon fontSize="small" />
        </IconButton>
        <IconButton
          className={classes.toolIcon}
          onClick={() => {
            //select all Tech
            setTechSel(technologies);
          }}
        >
          <DoneAllIcon fontSize="small" />
        </IconButton>
      </div>
      <Grid container spacing={2}>
        {projects.map((proj) => {
          for (let i = 0; i < proj.technologies.length; i++)
            if (
              techSel.find((current) => {
                return current === proj.technologies[i];
              })
            )
              return <ProjectCard {...proj} key={proj.title} />;
        })}
      </Grid>
    </Layout>
  );
};

export default ProjectsPage;
