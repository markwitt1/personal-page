import React, { memo } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import MuiTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

const materialComponents = {
  p: Typography,
  blockquote: (() => {
    const Blockquote = (props) => (
      <Paper style={{ borderLeft: "4px solid grey", padding: 8 }} {...props} />
    );
    return memo(Blockquote);
  })(),
  ul: (() => {
    const Ul = (props) => <Typography {...props} component="ul" />;
    return memo(Ul);
  })(),
  ol: (() => {
    const Ol = (props) => <Typography {...props} component="ol" />;
    return memo(Ol);
  })(),
  li: (() => {
    const Li = (props) => <Typography {...props} component="li" />;
    return memo(Li);
  })(),
  table: (() => {
    const Table = (props) => <MuiTable {...props} />;
    return memo(Table);
  })(),
  tr: (() => {
    const Tr = (props) => <TableRow {...props} />;
    return memo(Tr);
  })(),
  td: (() => {
    const Td = ({ align, ...props }) => (
      <TableCell align={align || undefined} {...props} />
    );
    return memo(Td);
  })(),
  tbody: (() => {
    const TBody = (props) => <TableBody {...props} />;
    return memo(TBody);
  })(),
  th: (() => {
    const Th = ({ align, ...props }) => (
      <TableCell align={align || undefined} {...props} />
    );
    return memo(Th);
  })(),
  thead: (() => {
    const THead = (props) => <TableHead {...props} />;
    return memo(THead);
  })(),
  hr: Divider,
  input: (() => {
    const Input = (props) => {
      const { type } = props;
      if (type === "checkbox") {
        return <Checkbox {...props} disabled={false} readOnly={true} />;
      }
      return <input {...props} />;
    };
    return memo(Input);
  })(),
  wrapper: (() => {
    const Wrapper = (props) => <div {...props} className="markdown-body" />;
    return memo(Wrapper);
  })(),
};

export default materialComponents;
