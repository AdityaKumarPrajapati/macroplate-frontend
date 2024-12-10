import { FC } from 'react'
import { ZipCodeList } from '../../core/_models'

type Props = {
    activityList: ZipCodeList
}

const ZipCodeListTypeInfoCell: FC<Props> = ({ activityList }) => {
    // const { params } = activityList;
    let parsedParams: Record<string, any> = {};

    // Handle if params is null, undefined, or an empty string
    // if (!params || typeof params !== 'string') {
    //     return <div className="text-muted">No additional details available</div>;
    // }

    // Try parsing the params
    // try {
    //     parsedParams = JSON.parse(params); // Parse the params JSON string
    // } catch (error) {
    //     console.error('Error parsing params:', error);
    //     return <div className="text-muted">Error in params format</div>; // Handle errors in parsing
    // }

    // Render parsed params, converting objects/arrays to a readable string
    return (
        <div className="text-muted">
            {/* {Object.entries(parsedParams).map(([key, value], index) => (
                <div key={index} className="mb-1">
                    <strong>{key.replace(/_/g, ' ')}:</strong>{' '}
                    {typeof value === 'object' ? JSON.stringify(value) : value || 'N/A'}
                </div>
            ))} */}
            Hello info cell 2
        </div>
    );
}

export { ZipCodeListTypeInfoCell }
