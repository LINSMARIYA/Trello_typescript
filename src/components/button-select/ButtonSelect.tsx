import "./ButtonSelect.css";

type OptionType = {
  key: string;
  id?: string;
  value?: string;
  label?: string;
};

type ButtonSelectProps = {
  label: string;
  value?: string;
  name?: string;
  id: string;
  options: OptionType[];
  statusId?: string;
  onChange?: void;
};

const ButtonSelect: React.FC<ButtonSelectProps> = ({
  label,
  value,
  name,
  id,
  options,
  statusId,
}) => {
  return (
    <div id={id}>
      <select id="white" name={label} value={value}>
        {options?.map((item) => (
          <option key={item.key} selected={item.key === value} id={statusId}>
            {item.label}
          </option>
        ))}
      </select>
      <br />
    </div>
  );
};

export default ButtonSelect;
