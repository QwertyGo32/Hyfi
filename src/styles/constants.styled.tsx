enum Responsive {
  mobile = "425px",
  tablet = "768px",
  desktop = "1366px",
}
const Device = {
  mobile: `(max-width: ${Responsive.mobile})`,
  tablet: `(max-width: ${Responsive.tablet})`,
  desktop: `(max-width: ${Responsive.desktop})`,
};

export default { Responsive, Device };
