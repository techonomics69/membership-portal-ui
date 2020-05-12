import { connect } from 'react-redux';
import { withFormik } from 'formik';

import AwardPointsForm from '../../components/admin/AwardPointsForm';
import { awardPoints } from '../../actions/adminActions';

const FormikAwardPointsForm = withFormik({
  mapPropsToValues() {
    return {
      points: 0,
      awardees: [],
      description: '',
    };
  },
  handleSubmit(values, { resetForm, props }) {
    const pointDetails = {
      points: values.points,
      users: values.awardees,
      description: values.description,
    };

    props
      .awardPoints(pointDetails)
      .then(() => {
        resetForm();
      })
      .catch(() => {});
  },
})(AwardPointsForm);

export default connect(null, { awardPoints })(FormikAwardPointsForm);
