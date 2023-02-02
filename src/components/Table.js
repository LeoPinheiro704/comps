import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((collumn) => {
    if (collumn.header) {
      return <Fragment key={collumn.label}>{collumn.header()}</Fragment>;
    }

    return <th key={collumn.label}>{collumn.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((collumn) => {
      return (
        <td key={collumn.label} className="p-3">
          {collumn.render(rowData)}
        </td>
      );
    });

    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
