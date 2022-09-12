import "./SelectField.css";

type OptionType = {
  key: string;
  id?: string;
  value?: string;
  label: string;
};

interface SelectFieldProps {
  label: string;
  onChange?: void;
  value?: string;
  id?: string;
  options: OptionType[];
  name?: string;
  statusId?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  value,
  name,
  id,
  options,
  statusId,
}) => {
  return (
    <div id={id}>
      <select id="black" name={label}>
        {options.map((item) => (
          <option key={item.key} selected={item.key === value} id={statusId}>
            {item.label}
          </option>
        ))}
      </select>
      <br />
    </div>
  );
};

export default SelectField;
